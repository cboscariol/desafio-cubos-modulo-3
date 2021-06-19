import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function DraggableDialog({ onClose, onDelete, ...props }) {
	return (
		<Dialog
			{...props}
		>
			<DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
				Remover produto do catálogo?
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Essa ação não poderá ser desfeita.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button autoFocus variant="contained" onClick={onClose} color="primary">
					MANTER PRODUTO
				</Button>
				<Button variant="contained" onClick={onDelete} color="secondary">
					REMOVER
				</Button>
			</DialogActions>
		</Dialog>
	);
}