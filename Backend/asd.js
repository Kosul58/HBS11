//person added each month counter
const aggregatePeopleByMonth = async () => {
    try {
      const result = await User.aggregate([
        {
          $group: {
            _id: {
              year: '$date.year',
              month: '$date.month',
            },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            year: '$_id.year',
            month: '$_id.month',
            count: 1,
          },
        },
        {
          $sort: {
            year: 1,
            month: 1,
          },
        },
      ]);
  
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      mongoose.disconnect();
    }
  };
  
aggregatePeopleByMonth();


// data adder loop
const generateSampleData = async () => {
    try {
      const sampleData = [];
  
      for (let month = 7; month <= 10; month++) {
        for (let i = 11; i <= 15; i++) {
          const username = `user_${month}_${i}`;
          const email = `user_${month}_${i}@example.com`;
          const hashed_password = await bycrypt.hash(email , 10)
          const user = new User({
            username,
            email,
            password: hashed_password,
            date: {
              year: 2023,
              month,
              day: i,
            },
            admin: false,
          });
  
          sampleData.push(user);
        }
      }
  
      await User.insertMany(sampleData);
      console.log('Sample data inserted successfully.');
    } catch (error) {
      console.error(error);
    } finally {
      mongoose.disconnect();
    }
};
generateSampleData()

//data deleter
const deleteSampleData = async () => {
    try {
      // Delete all documents that match a specific criteria, in this case, documents created in 2023
      const deletionResult = await User.deleteMany({ });
      console.log(`Deleted ${deletionResult.deletedCount} documents.`);
    } catch (error) {
      console.error(error);
    } finally {
      mongoose.disconnect();
    }
  };
deleteSampleData()