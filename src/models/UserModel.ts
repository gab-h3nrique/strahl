// import { ImageType } from "../types/imageType"
import { UserType } from "../types/UserType";
import prisma from "./../db/prisma"

function model() {

    return {

        get: async(id?: number) => {
            return id ? <UserType> await prisma.users.findFirst({ where: {id: id} }) 
            : <UserType[]> await prisma.users.findMany()
        },

        create: async(user: UserType) => {
            return <UserType> await prisma.users.create({ data: user }) 
        }

    }

}

const UserModel = model()

export default UserModel