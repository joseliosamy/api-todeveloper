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
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw2.jpg?token=ARHRXONBYWOWJKXLC3UHOZLBXUTMU",
				redirectURL: "/eventos/next-level-week-2"
			},
			//NLW3
			{
				eventName: "Next Level Week #3",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw3.jpg?token=ARHRXOP3XGWDSEDXRQLHDGTBXUTVC",
				redirectURL: "/eventos/next-level-week-3"
			},
			//NLW4 REACT
			{
				eventName: "Next Level Week #4 - ReactJS",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw4React.jpg?token=ARHRXOPP6YYIXIAP775NQWLBXUT7I",
				redirectURL: "/eventos/next-level-week-4-reactjs"
			},
			//NLW4 NODE
			{
				eventName: "Next Level Week #4 - Node",
				bannerURL: "",
				redirectURL: "/eventos/next-level-week-4-node"
			},
			//NLW4 ELIXIR
			{
				eventName: "Next Level Week #4 - Elixir",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw4Node.jpg?token=ARHRXON4LDB2SU7YRY7G6B3BXUTY6",
				redirectURL: "/eventos/next-level-week-4-elixir"
			},
			//NLW5 REACT
			{
				eventName: "Next Level Week #5 - Reactjs",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5React.jpg?token=ARHRXOPBMOJMHZPYNATM6E3BXUUCQ",
				redirectURL: "/eventos/next-level-week-5-reactjs"
			},
			//NLW5 REACT NATIVE
			{
				eventName: "Next Level Week #5 - React Native",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5ReactNative.jpg?token=ARHRXOKVHTDM5IL4GATVB3LBXUUKI",
				redirectURL: "/eventos/next-level-week-5-react-native"
			},
			//NLW5 NODE
			{
				eventName: "Next Level Week #5 - Node",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5Node.jpg?token=ARHRXOI2MNWD6HMMOY7VBC3BXUULQ",
				redirectURL: "/eventos/next-level-week-5-node"
			},
			//NLW5 ELIXIR
			{
				eventName: "Next Level Week #5 - Elixir",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5Elixir.jpg?token=ARHRXONBSWR4JNXODJWDXWDBXUUNE",
				redirectURL: "/eventos/next-level-week-5-elixir"
			},
			//NLW5 FLUTTER
			{
				eventName: "Next Level Week #5 - Flutter",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5Flutter.jpg?token=ARHRXOPU6EGVYHUAXKHTLJ3BXUUO4",
				redirectURL: "/eventos/next-level-week-5-flutter"
			},
			//IRA
			{
				eventName: "Imersão React Alura",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/IRA.jpg?token=ARHRXOIJT2RNDJ6SLLPFDADBXUUTI",
				redirectURL: "/eventos/imersao-react-alura"
			}
			
		]);
	}else{
		res.json([
			{status:'404'}
		])
	};
};