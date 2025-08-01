import styled from "styled-components";

const NumberSelector = (props) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    
    return (
        <NumberSelectorContainer>
            <div className='flex'>
                {arrNumber.map((value, i) => (
                    <Box
                        isSelected = {value === props?.selectedNumber}
                        key={i}
                        onClick={() => props?.setSelectedNumber(value)}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    
    .flex {
        display: flex;
        gap: 24px;
        cursor: pointer;
    }
    p {
        font-size: 24px;
        font-weight: 700px;

    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => !props.isSelected ? "black" : "white"}
`;