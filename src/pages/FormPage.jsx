import { useState } from "react";


import '../assets/css/formPage.css';

function FormPage (){

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        region: "",
        country: "",
        interest: "",
        investing: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return(
        <div className="container__form">
            <h2 className="text-xl font-bold mb-4 center_title" >Formulario de Inversión</h2>
            <form onSubmit={handleSubmit} className="form">
            <div className="content__input">
                <label>Nombre</label>
                <input className="textInput" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="content__input">
                <label>Apellidos</label>
                <input className="textInput" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="content__input">
                <label>Teléfono</label>
                <input className="textInput" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="content__input">
                <label>Correo Electrónico</label>
                <input className="textInput" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="content__input">
                <label>Región - País</label>
                <input className="textInput" name="region" value={formData.region} onChange={handleChange} required placeholder="Ejemplo: Colombia" />
            </div>
            <div className="content__input">
                <label>Estoy interesado en:</label>
                <div className="content__radioBtns">
                    <div>
                        <input type="radio" name="interes" value={formData.interest = 'ia'} onChange={handleChange}/> <label htmlFor="ai" className="radioBtn">Inteligencia Artificial</label>
                    </div>
                    <div>
                      <input type="radio" name="interes"  value={formData.interest = 'robotica'} onChange={handleChange}/> <label htmlFor="ai" className="radioBtn">Robótica</label>
                    </div>
                    <div> 
                        <input type="radio" name="interes"  value={formData.interest = 'tecnoFinancera'} onChange={handleChange}/> <label htmlFor="ai" className="radioBtn">Tecnologías Financieras</label>
                    </div>
                </div>
            </div>
            <div>
                <label>¿Actualmente estás invirtiendo?</label>
                <select onChange={handleChange}>
                        <option  value={formData.investing = 'si'}>Si</option>
                        <option value={formData.investing = 'no'}>No</option>
                </select>
            </div>
                <button type="submit" className="w-full">Enviar</button>
            </form>
        </div>
    );
}

export default FormPage;