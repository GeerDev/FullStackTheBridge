const User = require('../models/User.js');
const transporter = require("../config/nodemailer");

const UserController = {
    async register(req, res) {
        try {

            const {email, name, sector} = req.body;
            const user = await User.findOne({ email: email })
            if (user) {
                return res.status(400).send({ message: 'Este correo ya existe' });
            }
            const newUser = await User.create({...req.body, image: `https://avatars.dicebear.com/api/avataaars/${name}.svg`, sector: sector.toLowerCase() });

            res.status(201).send({ newUser, message: `Usuario creado con éxito` });
        } catch (error) {
            if (error.name == "ValidationError") {
              let errName = await Object.keys(error.errors)[0]
              res.status(400).send({ message: error.errors[errName].message });
            }
            res.status(500).send({ error, message: 'Hubo un problema al tratar de registrar el usuario' })
        }
    },
    async getUser(req, res) {
        try {
          const user = await User.find()
       
          res.status(200).send({user, message: `Usuarios traidos con éxito`});
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .send({ message: "Ha habido un problema al traer los usuarios" });
        }
      },
      async sendEmail(req, res) {
        try {
            if (req.body.isDigitalTalent !== 'Barcelona Digital Talent') {
                return res.status(400).send({ message: 'No eres administrador no puedes enviar el correo' });
            }
            await transporter.sendMail({
                to: req.body.email,
                subject: `Lo conseguiste ${req.body.name}`,
                html: `Enhorabuena ${req.body.name} Digital Talent Barcelona quiere contactar contigo`
            })
            res.status(201).send({ message: "Correo enviado con éxito" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error, message: 'Ha habido un problema al mandar el correo' })
        }
    },
}

module.exports = UserController