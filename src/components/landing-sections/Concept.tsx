import concept from '../../assets/img/concept.png'

export const Concept = () => {
    return (
        <div className='bg-white place-items-center grid h-[500px]'>
            <div className='flex justify-center max-w-[50rem]'>
                <img src={concept} alt="" className='object-cover translate-x-12 h-52'/>
            </div>
        </div>
    );
};
