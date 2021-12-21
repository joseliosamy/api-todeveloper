//
//
//
module.exports = (req,res) =>{
	if(req.method === 'GET'){
		res.json([
			//NLW1
			{
				id: 1,
				eventName: "Next Level Week #1",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw1.jpg?token=ARHRXONE6CPI2SBTYKXVDZTBZNQ4W",
				redirectURL: "/eventos/next-level-week-1",
				eps: [
					{
						epURL: "https://youtu.be/Ey57mQ2UXWE",
						epName: "Aula 01 - Acelerando sua evolução"
				},
					{
						epURL: "https://youtu.be/ABOYAjINERI",
						epName: "Aula 02 - Olhando para as oportunidades"
				},
					{
						epURL: "https://youtu.be/n9sCJFY6yjw",
						epName: "Aula 03 - A escolha da stack"
				},
					{
						epURL: "https://youtu.be/iCJSN-kDLCg",
						epName: "Aula 04 - Até 2 anos em 2 meses"
				},
					{
						epURL: "https://youtu.be/bqdidKkMz0g",
						epName: "Aula 05 - A milha extra"
				}
			]
			},
			//NLW2
			{
				id: 2,
				eventName: "Next Level Week #2",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw2.jpg?token=ARHRXOJY7BAY4K3ZKL63WITBZNQ2E",
				redirectURL: "/eventos/next-level-week-2"
			},
			//NLW3
			{
				id: 3,
				eventName: "Next Level Week #3",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw3.jpg?token=ARHRXOL35JZ5AXVTBKQVTYTBZNQ6E",
				redirectURL: "/eventos/next-level-week-3"
			},
			//NLW4 REACT
			{
				id: 4,
				eventName: "Next Level Week #4 - ReactJS",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw4React.jpg?token=ARHRXONRSQUU7QJ2GYTFWZDBZNRB4",
				redirectURL: "/eventos/next-level-week-4-reactjs"
			},
			//NLW4 NODE
			{
				id: 5,
				eventName: "Next Level Week #4 - Node",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw4Node.jpg?token=ARHRXOLAXIQB53S2MCW763LBZNRAU",
				redirectURL: "/eventos/next-level-week-4-node"
			},
			//NLW4 ELIXIR
			{
				id: 6,
				eventName: "Next Level Week #4 - Elixir",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw4Elixir.jpg?token=ARHRXOPV74DUFYVIFJ7RL5LBZNRCA",
				redirectURL: "/eventos/next-level-week-4-elixir"
			},
			//NLW5 REACT
			{
				id: 7,
				eventName: "Next Level Week #5 - Reactjs",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5React.jpg?token=ARHRXOJ2BZ37VXM3RKUW5RLBZNRFS",
				redirectURL: "/eventos/next-level-week-5-reactjs"
			},
			//NLW5 REACT NATIVE
			{
				id: 8,
				eventName: "Next Level Week #5 - React Native",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5ReactNative.jpg?token=ARHRXOMXUVSQKMFBFGXAJV3BZNRHA",
				redirectURL: "/eventos/next-level-week-5-react-native"
			},
			//NLW5 NODE
			{
				id: 9,
				eventName: "Next Level Week #5 - Node",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5Node.jpg?token=ARHRXOPY6SYS7K5UOMXKGALBZNRFM",
				redirectURL: "/eventos/next-level-week-5-node"
			},
			//NLW5 ELIXIR
			{
				id: 10,
				eventName: "Next Level Week #5 - Elixir",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5Elixir.jpg?token=ARHRXOKZC4O2HC2WUGNOB3DBZNRFA",
				redirectURL: "/eventos/next-level-week-5-elixir"
			},
			//NLW5 FLUTTER
			{
				id: 11,
				eventName: "Next Level Week #5 - Flutter",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/nlw5Flutter.jpg?token=ARHRXOLEJZ22AJUTB2DXYGLBZNRFG",
				redirectURL: "/eventos/next-level-week-5-flutter"
			},
			//IRA
			{
				id: 12,
				eventName: "Imersão React Alura",
				bannerURL: "https://raw.githubusercontent.com/joseliosamy/api-todeveloper/main/images/IRA.jpg?token=ARHRXOJ4OC4QUOS5RNCF6RLBZNRKK",
				redirectURL: "/eventos/imersao-react-alura"
			}
			
		]);
	}else{
		res.json([
			{status:'404'}
		])
	};
};