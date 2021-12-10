//
//
//
module.exports = (req,res) =>{
	if(req.method === 'GET'){
		res.json([
			{
				eventName: "Next Level Week #1",
				banner: "url",
				link: "url"
			}
		]);
	}else{
		res.json([
			{status:'404'}
		])
	};
};