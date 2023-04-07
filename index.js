const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = "https://www.zameen.com/add_property_single.html"
axios(url)
    .then(response => {
        const html = response.data
        // console.log(html)
        const $ = cheerio.load(html)

        // $('#city', html).each(function () {
            // const titles = $('#city').find('option').html();
            // console.log($('#city', html).find('option'))
            $('#city', html).find('option').each(function (title) {
                console.log(title.value)
            })
        // })
    }).catch(error => console.log(error))



app.listen(PORT, () => console.log(`Server running on ${PORT}`))