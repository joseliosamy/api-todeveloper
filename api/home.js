//
//
module.exports = (req,res) =>{
	if(req.method === 'GET'){
		res.json([
			{
				onDevice: true,
			}
		]);
	}else{
		res.json([
			{status:'404'}
		])
	};
};