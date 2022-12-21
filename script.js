const fetchHandler = async () => {
	const fetchedData = await fetch('https://dog.ceo/api/breeds/image/random');
	return await fetchedData.json();
};

const dogRenderer = async () => {
	data = await fetchHandler();
	dataContent = document.querySelector('.card img');
	dataContent.src = data.message;
};
dogRenderer();

document.querySelector('.btn').addEventListener('click', dogRenderer);
