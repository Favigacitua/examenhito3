import { getUsers, postUsers } from "../helpers/usersHelper.js"

const getUserController = async (req, res)=>{
    try {
       
    const { rows } = await getUsers()
      res.json({
       users: rows
       
      })

      
    } catch (error) {
       console.log(error)
    }   
   }

   
   const postUserController=async(req,res)=>{
    try {

        const {nombre, apellido, email, password} = req.body

        const {} = await postUsers(nombre, apellido, email, password)

        res.json({
            users: rows
        })
        
    } catch (error) {
        console.log
    }

   } 
   
   
   export {
    getUserController,
    postUserController
   }