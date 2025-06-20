import React from "react";
import imgFondo from "../assets/imgFondo.png";

const Main = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen text-white pt-[120px]"
            style={{ backgroundImage: `url(${imgFondo})` }}
        >
                 {/* Overlay oscuro para resaltar el texto */}
            <div className="absolute inset-0 bg-black/30"></div>

                {/* Contenido visible encima del overlay */}
            <div className="relative z-10 p-6 md:p-10 max-w-3xl mx-auto">
                <p className="text-xl sm:text-base leading-relaxed p-4 sm:p-6 rounded-xl shadow-md backdrop-blur-3xl bg-black/30">
                    ⚡ <strong>Únete a Mundo Luz Electricidad</strong>
                    <br />
                    <br />
                    Formá parte de la red que ilumina Catamarca.
                    <br />
                    <br />
                    Convertite en parte del sistema eléctrico que impulsa hogares, obras y
                    empresas.
                    <br />
                    En Mundo Luz no solo vendemos materiales:{" "}
                    <strong>construimos confianza, calidad y energía real</strong>.<br />
                    <br />
                    Instaladores, electricistas, arquitectos y emprendedores eligen
                    nuestra fuerza por una razón:
                    <br />
                    🔧 Stock permanente, precios reales y asesoramiento profesional.
                    <br />
                    <br />
                    Desde el cable más fino hasta el disyuntor más robusto, tenemos lo que
                    necesitás.
                    <br />
                    No importa el tamaño del proyecto: si es eléctrico, empieza con Mundo
                    Luz.
                    <br />
                    <br />
                    🛠️ Entrá al circuito.
                    <br />
                    ⚡ Sumate al equipo que enciende la provincia.
                    <br />
                    <br />
                    <strong>¡La electricidad necesita tu decisión!</strong>
                    <br />
                    Bienvenido al lado brillante.
                </p>

                {/* Botón */}
                <div className="mt-6 justify-center ">
                    <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-lg font-semibold shadow transition-all duration-300 hover:scale-105">
                    Registrate
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Main;
