import './styles.css';

type Props = {
    text: string;
}

export default function ButtonPrimary({text}: Props) {
    return (
        <div className="banco-btn banco-btn-blue">
            {text}
        </div>
    );
}