import { Spinner } from "./Spinner";

export const Loader = ({text}:{text:string}) => {
    return (
        <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center backdrop-blur-md">
            <div className="flex gap-4">
                <Spinner size={12} />
                {text ? text : <span className='opacity-0 aboslute'>Cargando...</span>}
            </div>
        </div>
    );
};
