import styled, {keyframes} from "styled-components";
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';

interface Props {
    id: string;
    name: string | null | undefined;
    image: string | null | undefined;
    tooltipText: string | null | undefined;
    handleOpenModal: () => void;
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

export const ListArtistEntry = ({ id, name, image, handleOpenModal, tooltipText }: Props) => {

    return (
        <HtmlTooltip
            title={tooltipText}
        >
            <ListArtistEntryDiv
                key={id}
                $image={image ? image: "default"}
                onClick={handleOpenModal}
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
    width: 50%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(props) => props.$image});
    transition: transform 0.3s ease-in-out;
    margin-bottom: 2rem;
    border: 3px darkred double;
    border-radius: 8px;
    box-shadow: 10px 10px rgba(128, 128, 128, 0.6);
    
    &:hover {
        animation: ${scaleAnimation} 0.5s ease-in-out forwards;
    }
`;

const Heading = styled.h1`
    width: 80%;
    margin: 1.5rem auto;
    background-color: rgba(128, 128, 128, 0.5); // Transparent grey background
    color: darkred; // Darkred text
    font-size: 4rem;
    text-shadow: 3px 6px 5px black;
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    border: 0.2px darkred solid;
    box-shadow: 3px 4px 5px black;
`;
