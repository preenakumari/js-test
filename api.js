let memes=document.querySelector("#memes")
let meme=async()=>{
    const url = 'https://meme-generator-and-template-database.p.rapidapi.com/template/Bernie_I_Am_Once_Again_Asking_For_Your_Support';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'a20033afe3msh07ac1c346735c88p1882e0jsn7f3c71ecd0fb',
		'x-rapidapi-host': 'meme-generator-and-template-database.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {
		text0: {
			text: 'for your financial support',
			font_size: 33,
			font: 'kanit'
		},
		text1: {
			text: 'This API developer:',
			font_size: 30
		}
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result)
    // result.map((k)=>{
        // let imgdiv=document.createElement("div")
        // let pics=document.createElement("h3")
        // memes.append(imgdiv)
        // imgdiv.append(pics)
        // pics.scr=result
    // })
} catch (error) {
	console.error(error);
}
}