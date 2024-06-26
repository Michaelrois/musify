import styled, {keyframes} from "styled-components";
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';

interface Props {
    id: string;
    name: string | null | undefined;
    image: string | null | undefined;
    tooltipText: string | null | undefined;
    //onClick: () => void;
}

const HtmlTooltip = styled (({ className, ...props} : TooltipProps) =>(
    <Tooltip {...props} classes={{ popper: className }} />
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#9c9ca2',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: '1.2rem',
        border: '1px solid #dadde9',
    },
}));

export const ListArtistEntry = ({ id, name, image, tooltipText }: Props) => {
    return (
        <HtmlTooltip
            title={tooltipText}
        >
            <ListArtistEntryDiv
                key={id}
                $image={image ? image: "default"}
                //onclick={() => {}}
            >
                <Heading>{name}</Heading>
            </ListArtistEntryDiv>
        </HtmlTooltip>
    );
}

interface  ListArtistEntryProps {
    $image: string;
}

const scaleAnimation = keyframes`

    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.5);
    }
`;

const ListArtistEntryDiv = styled.div<ListArtistEntryProps>`
    cursor: pointer;
    width: 40%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/images/${(props) => props.$image}.jpg);
    transition: transform 0.3s ease-in-out;
    margin-bottom: 2rem;
    border: 2px black solid;
    box-shadow: 10px 10px rgba(128, 128, 128, 0.6);
    
    &:hover {
        animation: ${scaleAnimation} 0.5s ease-in-out forwards;
    }
`;

const Heading = styled.h1`
    background-color: rgba(128, 128, 128, 0.5); // Transparent grey background
    color: white; // White text
    font-size: 3rem;
    text-shadow: 2px 2px 5px black;
    text-align: center;
    padding: 1rem;
    border-radius: 4px;
    border: 0.5px black solid;
`;