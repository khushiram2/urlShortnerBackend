import {nanoid} from "nanoid"
import { urlModel } from "../models/urlSchema.js";
export const generateNewShortenUrl=async(req,res)=>{
  try {
    const {redirectURL}=req.body;
    if(!redirectURL) return res.status(400).send({error:"url is required"})
    const shortId=nanoid(5)
    const savedUrl=await urlModel.create({shortId:shortId,redirectURL:redirectURL})
    if(!savedUrl) return res.status(400).send({message:"url not generated"})
    res.status(200).send({url:`http://localhost:4356/${shortId}`})
  } catch (error) {
   console.log(error) 
    res.status(500).send({message:"internal server error"})
  }
}

export const redirectToUrl=async(req,res)=>{
  try {
    const {shortId}=req.params;
    console.log(shortId)
    const redirectURL=await urlModel.findOne({shortId:shortId})
    if(!redirectURL) return res.status(400).send({message:"no redirect url"})
    res.redirect(`https://${redirectURL.redirectURL}`)
  } catch (error) {
    console.log(error) 
    res.status(500).send({message:"internal server error"})
    
  }
}
