
async function fetchData() {
    try {
      // Use Mongoose to find documents in the Hotelavai collection
      const hotels = await havai.find({});
      // Process the fetched data
      hotels.forEach((hotel) => {
        console.log('Hotel Name:', hotel.hname);
        console.log('Room Type Count:', hotel.roomtypecount.Premium.Single);
        console.log('Booking Count:', hotel.bookingcount.Premium.Single);
        console.log('-------------------');
      });
  
      // Close the database connection
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the fetchData function to initiate the data fetching process
  fetchData();





  
app.get('/api/hotela',async(req,res)=>{
  const { hname , acategory , atype , count} = req.query;
  const roomtype="roomtypecount"
  const booktype="bookingcount"
  try {
      const rcount = await Roomprice.findOne({ hname, roomtype , acategory, atype });
      const bcount = await Roomprice.findOne({ hname, booktype , acategory, atype });
      const acount = bcount*count;
      if (acount < rcount) {
          availabilityStatus = "Available";
      }
      res.json(availabilityStatus)
  } catch (error) {
      console.error('Error fetching Availability:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
})
