import mongoose from "mongoose";

const EtapaSchema = mongoose.Schema({
        numero: {
            type: Number,
            require: true,
            trim: true
        },
        fecha: {
            type: String,
            require: true,
            trim: true
        },
        inicio: {
            type: String,
            require: true,
            trim: true
        },
        fin: {
            type: String,
            require: true,
            trim: true
        },
        distancia: {
            type: Number,
            require: true,
            trim: true
        },
        tipo: {
            type: String,
            require: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Etapa = mongoose.model("etapas",EtapaSchema);

export default Etapa;