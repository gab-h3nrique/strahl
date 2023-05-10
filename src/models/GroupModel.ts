// import { ImageType } from "../types/imageType"
import { GroupType } from "../types/GroupType";
import prisma from "./../db/prisma"

function model() {

    return {

        get: async(id?: number) => {

            return id ? <GroupType> await prisma.groups.findFirst({ where: {id: id} }) 
            : <GroupType[]> await prisma.groups.findMany()

        },

        upsert: async(group: GroupType) => {

            return <GroupType> await prisma.groups.upsert({
                where: { id: group.id ? group.id : -1},
                create: group,
                update: group
            }) 
            
        }

    }

}

const GroupModel = model()

export default GroupModel