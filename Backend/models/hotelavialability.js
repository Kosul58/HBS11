const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    hname:{
        type:String,
        required: [true, 'hotelname cannot be blank' ]
    },
    roomtypecount:{
        Premium:{
            Single:Number,
            Double:Number
        },
        Deluxe:{
            Single:Number,
            Double:Number
        },
        DeluxePlus:{
            Single:Number,
            Double:Number
        },
        Meeting:{
            Small:Number,
            Medium:Number,
            Large:Number
        },
    },
    bookingcount:{
        Premium:{
            Single:Number,
            Double:Number
        },
        Deluxe:{
            Single:Number,
            Double:Number
        },
        DeluxePlus:{
            Single:Number,
            Double:Number
        },
        Meeting:{
            Small:Number,
            Medium:Number,
            Large:Number
        },
    },
})


module.exports = mongoose.model('Hotelavai' , hotelSchema);



//hotel adder






/*
const hav = new havai({
    hname: 'Himalaya Hotel Newroad, Pokhara',
    roomtypecount: {
      Premium: {
        Single: 20,
        Double: 15,
      },
      Deluxe: {
        Single: 15,
        Double: 10,
      },
      DeluxePlus: {
        Single: 10,
        Double: 10,
      },
      Meeting: {
        Small: 5,
        Medium: 3,
        Large: 2,
      },
    },
    bookingcount: {
      Premium: {
        Single: 20,
        Double: 1,
      },
      Deluxe: {
        Single: 4,
        Double: 2,
      },
      DeluxePlus: {
        Single: 3,
        Double: 2,
      },
      Meeting: {
        Small: 1,
        Medium: 2,
        Large: 1,
      },
    },
})
hav.save()
.then(data => console.log(data))
.catch(err => console.error(err))
*/





/*
const hav = new havai({
    hname: 'Himalaya Hotel NewBaneshwor, Kathmandu',
    roomtypecount: {
      Premium: {
        Single: 20,
        Double: 15,
      },
      Deluxe: {
        Single: 15,
        Double: 10,
      },
      DeluxePlus: {
        Single: 10,
        Double: 10,
      },
      Meeting: {
        Small: 5,
        Medium: 3,
        Large: 2,
      },
    },
    bookingcount: {
      Premium: {
        Single: 2,
        Double: 1,
      },
      Deluxe: {
        Single: 4,
        Double: 2,
      },
      DeluxePlus: {
        Single: 3,
        Double: 1,
      },
      Meeting: {
        Small: 1,
        Medium: 2,
        Large: 1,
      },
    },
})
hav.save()
.then(data => console.log(data))
.catch(err => console.error(err))
*/





/*
const hav = new havai({
    hname: 'Himalaya Hotel Bharatpur, Chitwan',
    roomtypecount: {
      Premium: {
        Single: 20,
        Double: 15,
      },
      Deluxe: {
        Single: 15,
        Double: 10,
      },
      DeluxePlus: {
        Single: 10,
        Double: 10,
      },
      Meeting: {
        Small: 5,
        Medium: 3,
        Large: 2,
      },
    },
    bookingcount: {
      Premium: {
        Single: 2,
        Double: 1,
      },
      Deluxe: {
        Single: 4,
        Double: 2,
      },
      DeluxePlus: {
        Single: 3,
        Double: 1,
      },
      Meeting: {
        Small: 1,
        Medium: 2,
        Large: 2,
      },
    },
})
hav.save()
.then(data => console.log(data))
.catch(err => console.error(err))
*/