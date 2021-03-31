import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';

interface IProps {
    handleClose: () => void;
    isOpen: boolean;
    title: string;
    link: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function Popup(props: IProps) {
    const classes = useStyles();

    return (
        <Modal
            open={props.isOpen}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div
                style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                className={classes.paper}>
                <h2 id="simple-modal-title">{props.title}</h2>
                <a href={props.link} target="_blank" id="simple-modal-description">
                    Open in new tab
                </a>
            </div>
        </Modal>
    )
}

export default Popup;