//
//
//
module.exports = (req,res) =>{
	if(req.method === 'GET'){
		res.json([
			//NLW1
			{
				eventName: "Next Level Week #1",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw1.jpg?token=ARHRXOJL7T7ENLDOPDZNZK3BXURFC",
				redirectURL: "/eventos/next-level-week-1"
			},
			//NLW2
			{
				eventName: "Next Level Week #2",
				bannerURL: "/images/nlw2.jpg",
				redirectURL: "/eventos/next-level-week-2"
			},
			//NLW3
			{
				eventName: "Next Level Week #3",
				bannerURL: "url",
				redirectURL: "/eventos/next-level-week-3"
			},
			//NLW4
			{
				eventName: "Next Level Week #4",
				bannerURL: "url",
				redirectURL: "/eventos/next-level-week-4"
			}
			
		]);
	}else{
		res.json([
			{status:'404'}
		])
	};
};