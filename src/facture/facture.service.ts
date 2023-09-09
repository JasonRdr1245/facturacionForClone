import { Company } from './../company/entities/company.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { User } from 'src/user/entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Facture } from './entities/facture.entity';
import { Detail } from 'src/detail/entities/detail.entity';
import { DetailService } from '../detail/detail.service';
import { UserService } from 'src/user/user.service';
import { Client, ClientSchema } from 'src/client/entities/client.entity';

@Injectable()
export class FactureService {

  constructor(@InjectModel(Company.name) private readonly companyModel: Model<Company>,
    @InjectModel(Facture.name) private readonly factureModel: Model<Facture>,
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
    private readonly userService: UserService,
    private readonly detailService: DetailService
  ) { }


  //los datos que recibe son detail[],totalPayments,payMethod

  async create(createFactureDto: CreateFactureDto, req: Request) {
    try {
      const { ruc, ...rest } = createFactureDto
      const client = await this.userService.getRuc(ruc).toPromise()
      const clientData = client.data;
      const clientObject: Company = {
        name: clientData.nombre,
        ruc: clientData.numeroDocumento,
        typeDocument: clientData.tipoDocumento,
        adress: clientData.direccion || "desconocido",
        state: clientData.estado,
        condition: clientData.condicion,
        district: clientData.distrito || "desconocido",
        province: clientData.provincia || "desconocido",
        departament: clientData.departamento || "desconocido"
      }
      const dataBaseClient =await this.clientModel.findOne({ ruc: clientObject.ruc })
      if(dataBaseClient===null){
        const dataBaseClient=new this.clientModel(clientObject)
        await dataBaseClient.save()
      }
      const {_id,...clientRest}=dataBaseClient.toJSON()
      const user = req['user'] as User;
      const { company, ...userObject } = user
      const companyId = company;
      const companyObject = await this.companyModel.findById(companyId)
      var totalPrice: number = 0;
      var totalIgv: number = 0;
      var detailObjectContainer: Detail[] = [];
      for (const elem of createFactureDto.detail) {
        const detailObject: Detail = await this.detailService.findOne(elem)
        if (!detailObject) {
          throw new BadRequestException('datos erroneos detail id')
        }
        detailObjectContainer.push(detailObject)
        totalIgv += detailObject.igvImportDetail
        totalPrice += detailObject.totalPrice

      }
      const totalPriceNet = totalPrice - totalIgv;
      const newFacture = await new this.factureModel({
        detail: createFactureDto.detail,
        company: companyId,
        totalPriceNet,
        totalIgv,
        totalPrice,
        user: userObject._id,
        client:_id
      })

      if (createFactureDto.payMethod) {
        newFacture.payMethod = createFactureDto.payMethod;
      }
      if (createFactureDto.totalPayments) {
        newFacture.totalPayments = createFactureDto.totalPayments;
      }
      if (newFacture.totalPayments !== 1) {
        newFacture.amountPayments = newFacture.totalPrice / newFacture.totalPayments;
      } else {
        newFacture.amountPayments = newFacture.totalPrice
      }

      const factureObject = this.desestructDataFacture(newFacture.toJSON())
      await newFacture.save()

      return {
        ...factureObject,
        company: companyObject,
        detail: detailObjectContainer,
        user: userObject,
        client:clientObject
      };
    } catch (error) {
      throw new BadRequestException('algo en los datos ha fallado')
    }


  }

  findAll() {
    return `This action returns all facture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facture`;
  }

  update(id: number, updateFactureDto: UpdateFactureDto) {
    return `This action updates a #${id} facture`;
  }

  remove(id: number) {
    return `This action removes a #${id} facture`;
  }

  desestructDataFacture(facture: Facture) {
    const { company,client, detail, ...object } = facture;
    return object;
  }

}
