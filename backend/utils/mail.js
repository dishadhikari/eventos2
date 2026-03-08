const nodemailer=require("nodemailer");

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:
    {
        user:"dishaadhikari2006@gmail.com",
        pass:"hngf tndd odpe btzs"
    }
});
const sendMail=async(email,name)=>
{
    const mailOptions=
    {
        from:"dishaadhikari2006@gmail.com",
        to:email,
        subject:"Successful Account Creation",
        html:`
        <h2>Hello ${name}</h2>
        <p>Your account has been created successfully.</p>
        <p>You can now login to the platform.</p>`
    };
    await transporter.sendMail(mailOptions);
}
const sendMail2=async(email,name)=>
    {
        const mailOptions=
        {
            from:"dishaadhikari2006@gmail.com",
            to:email,
            subject:"Event Registration Successful",
            html:`
            <h2>Hello ${name}</h2>
            <p>You have successfully registered for the competition.</p>
            <p>Please keep updated and stay on track with the updates and notifications.</p>`
        };
        await transporter.sendMail(mailOptions);
    }
const sendMail3=async(email,name)=>
{
    const mailOptions=
    {
        from:"dishaadhikari2006@gmail.com",
        to:email,
        subject:"Event Initiaion Successful",
        html:`
        <h2>Hello ${name}</h2>
        <p>You have successfully created the competition.</p>
        <p>Please keep your participants updated on track with the updates and notifications.</p>`
    };
            await transporter.sendMail(mailOptions);
}
module.exports=
{
    sendMail,
    sendMail2,
    sendMail3
}