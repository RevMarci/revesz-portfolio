import Button from './Button';

function ProjectCard(props) {
    return (
        <div className="baseCard">
            <h1>Projekt {props.number}</h1>
            <p>Valami, valami...</p>
            <Button />
        </div>
    );
}

export default ProjectCard;