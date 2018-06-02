import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { SocialIcon } from 'react-social-icons';

class MessageDialog extends React.Component {
    render() {
        const { fullScreen } = this.props;
        return (
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.props.dialogMessageOpen}
                    onClose={this.props.handleDialogMessageClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        Corat Coret
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Semua tulisan yang ada di halaman ini merupakan pengalaman pribadi saya saat mondar mandir di dunia IT.
                            Mohon maaf apabila ada kesalahan dalam penulisan maupun tutur kata.
                            <br /><br />
                            Apabila anda tertarik berdiskusi atau berkolaborasi dalam membuat sesuatu, anda bisa hubungi saya melalui link berikut,
                            <br /><br />
                            <SocialIcon url="mailto:khanis.anthony@gmail.com" style={style.SocialIcon}  />
                            <SocialIcon url="https://id.linkedin.com/in/khanis-anthony-kurniawan-736014160" style={style.SocialIcon} />
                            <SocialIcon url="https://github.com/khanisak" />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleDialogMessageClose} color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const style = {
    SocialIcon: {
        marginRight: '10px'
    }
}

export default MessageDialog;