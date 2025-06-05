


export function isAdmin(req){

    if(req.user==null){
        return false
    }

    if(req.user.type != "admin"){
        return false
    }

    return true
}
