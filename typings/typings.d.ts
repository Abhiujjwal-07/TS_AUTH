import {User}from "@prisma/client"
export{};
declare global{
    interface Request{
        User?: User;
    }
}