import { ContainerContact } from "./style";
import github from "../../assets/github1.png"
import instagram from "../../assets/instagram.png"
import whatsapp from "../../assets/whatsapp.png"
import emailImg from "../../assets/o-email.png"
import emailjs from "@emailjs/browser"
import { useState } from "react";
import { toast } from "react-toastify";

export function Conatact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (email === '' || name === '' || message === '') {
            console.log('ta vazio man')
            toast.error('Preencha todos os campos!!');
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send('gmail_service', 'template_daj7juo', templateParams, 'aA-AtutuZZGuF369u')
            .then((response) => {
                toast.success('Mensagem enviada');
                setEmail('');
                setName('');
                setMessage('');
                console.log(response.status, response.text);
            }, (err) => {
                toast.error('Mensagem nao enviada');
                console.log("ERRO: ", err);
            })

    };


    return (
        <ContainerContact id="contact">
            <h1>Contact</h1>
            <div className="box">
                <div className="form">
                    <h3>Get in touch</h3>
                    <form onSubmit={sendEmail}>
                        <input type="text" name="name" className="nome" placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="email" name="email" className="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="text" name="message" className="mensagem" maxLength={400} placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                        // onClick={() => handleEmail(mensagem)}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="links">
                    <img src={instagram} />
                    <img src={whatsapp} />
                    <img src={emailImg} />
                    <img src={github} />
                </div>
            </div>
            <div className="direitos">
                <h1>© Ricardo Silva :)</h1>
            </div>
        </ContainerContact>
    )
}