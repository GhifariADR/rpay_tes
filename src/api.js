import axios from "axios";

export const getData = async () => {
    await axios.get('https://dummyjson.com/products')
    .then((resp) => {
        let data = resp.data
        console.log(data)
    })
//     fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
}