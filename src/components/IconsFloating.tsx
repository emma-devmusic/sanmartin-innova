import { IconCode } from './IconCode';

export const IconsFloating = () => {
    return (
        <div className='-translate-x-20'>
            <IconCode
                spin
                spinDuration={9}
                pivot="top left"
                className="left-30 absolute -top-18 text-white"
            />
            <IconCode
                spin
                spinDuration={8}
                pivot="top right"
                className="absolute -top-16 left-0 text-white"
            />
            <IconCode
                spin
                spinDuration={6}
                pivot="top right"
                className="absolute -top-16 left-45 text-white"
            />
            <IconCode
                spin
                spinDuration={10}
                pivot="bottom right"
                className="absolute -top-16 left-28 text-white"
            />
            <IconCode
                spin
                spinDuration={9}
                pivot="top left"
                className="left-30 absolute -top-18 text-white"
            />
            <IconCode
                spin
                spinDuration={8}
                pivot="top right"
                className="absolute -top-16 left-0 text-white"
            />
            <IconCode
                spin
                spinDuration={6}
                pivot="top right"
                className="absolute -top-16 left-45 text-white"
            />
            <IconCode
                spin
                spinDuration={10}
                pivot="bottom right"
                className="absolute -top-16 left-28 text-white"
            />
        </div>
    );
};
