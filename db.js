import { connect } from "mongoose";
connect("mongodb://localhost:27017/db",
{
    useNewUrlparser: true,
})

.then(() => console.log("Connection Successful !"))
.catch((err) => {
    return console.log(err);
});