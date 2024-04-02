import nanoid from "nanoid"

export const generateNewShortenUrl=async(req,res)=>{
  try {
    constshortId=nanoid(5
  } catch (error) {
   console.log(error) 
    res.status(500).send({message:"internal server error"})
  }
}
