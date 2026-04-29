import { useForm } from "react-hook-form";
import { InputText } from "../components/atoms/InputText";
import { InputPassword } from "../components/atoms/InputPassword";
import {Button} from "../components/atoms/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormData ={
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().min(1, "Email Harus Diisi"),
    password: z.string().min(8, "Password Minimal 8 Karakter"),
});

export default function LoginForm({ onSwitch }: { onSwitch: () => void }) {
    const {
        register,
        handleSubmit,
        formState: { errors},
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return  (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-full max-w-lg min-height-[450px] bg-gray-900 p-10 rounded-xl shadow-lg">
                <h1 className="text-white text-2xl font-bold mb-6 text-center">
                    Login
                </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputText 
            label="Email"
            nama="email"
            register={register}
            error={errors.email?.message}
        />

         <InputPassword
            label="Password"
            nama="password"
            register={register}
            error={errors.password?.message}
        />

        <div>
            <Button label ="Login" variant="primary" />
        </div>

        <p className="text-sm text-center mt-4">
        Belum punya akun?{" "}
        <span
            className="text-red-500 cursor-pointer"
            onClick={onSwitch}
        >
            Daftar
        </span>
        </p>

        </form>
        </div>
    </div>
    );
}
