import "./QuestionCard.scss"

interface questionData {
    question: any;
    options: any;
    onSelect: Function;
}
const QuestionCard = ({ question, options, onSelect }: questionData) => {

    return (
        <div className={`questionCard-root`}>
            <div className='question-title'>{question}</div>
            <div className='options-container'>
                {options.map((option: any, index: any) => {
                    return <OptionCard key={index} {...option} onSelect={onSelect}/>
                })}
            </div>
        </div>
    )
}

const OptionCard = ({ img, label, value, onSelect }: { img: string; label: string; value: string; onSelect: (value: string) => void }) => {
    return (
        <div className="option-card" onClick={() => onSelect(value)}>
            <div className="image-container">
                <img src={img} alt={label} />
            </div>
            <div className="label">{label}</div>
        </div>
    );
};

export default QuestionCard
