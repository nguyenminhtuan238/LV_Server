const db=require('./')
exports.setup=(code,fields)=>{
    return  db.execute(
        code,
        fields
      ).then(([rows,fields])=>{
        return rows
      })
}

