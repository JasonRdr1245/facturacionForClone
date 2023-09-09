import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs'
import { HttpService } from '@nestjs/axios';
import { Observable, catchError, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Company } from 'src/company/entities/company.entity';


@Injectable()
export class UserService {

  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly http: HttpService,
  ) { }


  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      //encriptar contraseña
      const { password, ruc, ...userData } = createUserDto;

      const company = await this.getRuc(ruc).toPromise();
      const companyData = company.data;
      const companyObject: Company = {
        name: companyData.nombre,
        ruc: companyData.numeroDocumento,
        typeDocument: companyData.tipoDocumento,
        adress: companyData.direccion||"desconocido",
        state: companyData.estado,
        condition: companyData.condicion,
        district: companyData.distrito||"desconocido",
        province: companyData.provincia||"desconocido",
        departament: companyData.departamento||"desconocido"
      }

      const dataBaseCompany =await this.companyModel.findOne({ ruc: companyObject.ruc })

      if(dataBaseCompany===null){
        const dataBaseCompany=new this.companyModel(companyObject)
        await dataBaseCompany.save()
      }

      const {_id,...companyRest}=dataBaseCompany.toJSON()

      const newUser = new this.userModel({
        password: bcryptjs.hashSync(password, 10),
        ...userData,
        company: _id,
      })



      await newUser.save();
      const { password: _, ...user } = newUser.toJSON()
      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`data already exist`)
      }

      if(error.response.message==='ruc no valido'){
        throw new BadRequestException('ruc no valido')
      }


      
    }
  }

  findAll() {
    try {
      return this.userModel.find().select('name surname email company')
    } catch (error) {
      throw new InternalServerErrorException('Something terrible was happend')
    }
  }

  async findUserById(id: string) {
    const user = await this.userModel.findById(id);
    const { password, ...rest } = user.toJSON()
    return rest
  }

  getRuc(ruc: number): Observable<any> {
      const headers = new Headers({
        'Authorization': 'Bearer apis-token-5375.SEvLxH2oeGoCybQpTerv-hU-OGk6fvFz'
      });

      return this.http.get(`https:api.apis.net.pe/v1/ruc?numero=${ruc}`, { headers: { 'Authorization': 'Bearer apis-token-5375.SEvLxH2oeGoCybQpTerv-hU-OGk6fvFz' } })
        .pipe(
          map((response: AxiosResponse<any, any>) => {
            return {
              ...response,
              data: response.data
            };
          }),
          catchError((error:any)=>{
            throw new BadRequestException('ruc no valido')
          })
        );

  }

}
