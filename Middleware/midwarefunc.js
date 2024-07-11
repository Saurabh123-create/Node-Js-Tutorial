const  routemiddleware = (req,res,next)=>{
    if(!req.query.token){
        res.send("alert('Provide Token')")
    }
    else(
        next()
    )
}

module.exports  = routemiddleware 