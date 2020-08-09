import React from 'react';
import HeaderBar from "./HeaderBar";
import {Grid, Typography, Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import body_1_img from '../Assets/Img/hero_illustration.png'
import frame_wave_blue from '../Assets/Img/frame_wave_blue.png'
import body3_illustration from '../Assets/Img/body3_illustration.png'
import frame_wave_green from '../Assets/Img/frame_wave_green.png'
import body3_line from '../Assets/Img/body3_line.png'
import FooterLogo from '../Assets/Logo/FooterLogo.svg'
import HeaderLogo from '../Assets/Logo/HeaderLogo.svg'
import ReactPlayer from "react-player"

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        background: '#F2F2F2',
        paddingTop: 60,
        [theme.breakpoints.down('md')]: {
            paddingTop: 30,
            paddingLeft: 20,
        },
    },
    center: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },

    body1_typo: {
        color: '#EB5757',
        fontFamily: 'roboto slab',
        fontSize: 76,
        paddingTop: 10,
    },
    body1_typo1: {
        color: '#424242',
        fontFamily: 'Roboto, sans-serif;',
        fontSize: 24,
        paddingTop: 10

    },
    body1_img_container: {
        paddingTop: 50,
        paddingLeft: 50,
        [theme.breakpoints.down('md')]: {
            padding: 0
        },
    },
    signButton: {
        background: '#ffbc6d',
        color: 'white',
        marginRight: 10,
        fontSize: 24,
        fontWeight: 'bold',
        width: '60%',
        marginTop: 20
    },
    body2_container: {
        backgroundImage: `url(${frame_wave_blue})`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        height: 120,
        marginTop: 30
    },
    body2_sub_container: {
        height: 1150,
        left: 0,
        width: '100%',
        backgroundColor: '#2F7686',
    },
    body2_title_typo: {
        color: "#F2F2F2",
        paddingLeft: 70,
        paddingTop: 40,
    },
    body2_title_content: {
        color: "#F2F2F2",
        paddingLeft: 70,
        paddingTop: 20,
        lineHeight: 1.5
    },
    videoPlay: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        margin: 30
    },
    body3_container: {
        backgroundImage: `url(${frame_wave_green})`,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        height: 120,
        marginTop:-150
    },
    body3_sub_container: {
        height: 820,
        width: '100%',
        backgroundColor: '#27AE60',
    },
    body3_faq_img_container: {
        paddingTop: 50,
        paddingLeft: 70
    },
    body3_list_item_title: {
        fontSize: 25,
        color: "#F2F2F2",
        marginLeft: 50,
        paddingTop: 35
    },
    body3_list_item_content: {
        fontSize: 18,
        color: "#F2F2F2",
        marginLeft: 50,
        paddingRight: 30
    },
    footerContainer: {
        background: "#F2F2F2",
    },
    footerLogo:{
        margin:20
    }
}));

function LandingPage(props) {
    const classes = useStyles()
    return (
        <>
            <div className={classes.container}>
                <HeaderBar/>
                {/*body 1*/}
                {/*-------------------------------------------------------*/}
                <Grid container>
                    <Grid item xs={12} sm={6} style={{paddingLeft: 70}}>
                        <Typography className={classes.body1_typo}>Shop with ease with verified identify</Typography>
                        <Typography className={classes.body1_typo1}>Create a token dolor sit amet,<br/> based on
                            patented technology.</Typography>
                        <Button className={classes.signButton} variant={"contained"}>SIGN UP NOW</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={body_1_img} alt="Body 1 image" className={classes.body1_img_container}/>
                    </Grid>
                </Grid>
                {/*body 2*/}
                {/*-------------------------------------------------------*/}
                <div className={classes.body2_container}>
                    <Typography className={classes.body2_title_typo} variant={"h2"}>How it works?</Typography>
                </div>
                <div className={classes.body2_sub_container}>
                    <Typography className={classes.body2_title_content} variant={"h5"}>
                        MyIDToken is new service that quidem tibi studiose et diligenter tractandos magnopere
                        censeo.
                        <br/> Si verbum sequimur, primum longius verbum praepositum quam bonum. Sed hoc sane
                        concedamus.
                        <br/> Si enim ad populum me vocas, eum.<br/><br/>
                        <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed residamus, inquit, si
                        placet.
                        <br/>Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec.
                        <br/>Illis videtur, qui illud non dubitant bonum dicere -; Negat enim summo bono afferre
                        incrementum diem.
                        <br/>Oratio me istius philosophi non offendit; Duo Reges: constructio
                        interrete.</Typography>
                    <Typography className={classes.body2_title_typo} variant={"h2"} align={"center"}
                                style={{marginTop: 10, paddingLeft: 0}}>See video how it works</Typography>
                    <div className={classes.videoPlay}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                        />
                    </div>
                    <div className={classes.center}><Button className={classes.signButton} variant={"contained"}>SIGN
                        UP NOW</Button></div>
                </div>
                {/*body 3*/}
                {/*-------------------------------------------------------*/}
                <div className={classes.body3_container}>
                    <Typography className={classes.body2_title_typo} variant={"h2"}>FAQ</Typography>
                </div>
                <div className={classes.body3_sub_container}>
                    <Grid container>
                        <Grid item xs={12} sm={5}>
                            <div className={classes.body3_faq_img_container}>
                                <img src={body3_illustration} alt="" width={"400"}/>
                            </div>

                            <li className={classes.body3_list_item_title}>Why do we have to use a
                                token?
                            </li>

                            <p className={classes.body3_list_item_content}>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Atque hoc loco similitudines eas, quibus
                                illi uti solent, dissimillimas proferebas.</p>

                            <li className={classes.body3_list_item_title}>How will the token be used?</li>

                            <p className={classes.body3_list_item_content}>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Summus dolor plures dies manere non potest?
                                Restinguet citius, si ardentem acceperit. Sed ego in hoc resisto; Aliena dixit
                                in physicis nec ea ipsa, quae tibi probarentur; Habent enim et bene longam et
                                satis litigiosam disputationem.</p>


                        </Grid>
                        <Grid item xs={12} sm={7} style={{display: 'flex', paddingRight: 15}}>
                            <img src={body3_line} alt="" height={700} width={8}/>
                            <div>

                                <li className={classes.body3_list_item_title}>What if I am not able to verify
                                    the ID token?
                                </li>

                                <p className={classes.body3_list_item_content}>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Quare attende, quaeso. Huic mori optimum esse
                                    propter desperationem sapientiae, illi propter spem vivere. Universa enim
                                    illorum ratione cum tota vestra confligendum puto. Sine ea igitur iucunde
                                    negat posse se vivere? Quae similitudo in genere etiam humano apparet. Quem
                                    Tiberina descensio festo illo die tanto gaudio affecit, quanto L.</p>

                                <li className={classes.body3_list_item_title}>Can you use it with your phone?
                                </li>

                                <p className={classes.body3_list_item_content}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <li className={classes.body3_list_item_title}>
                                    How many tokens are available?
                                </li>

                                <p className={classes.body3_list_item_content}>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Non quaero, quid dicat, sed quid convenienter
                                    possit rationi et sententiae suae dicere.</p>

                                <li className={classes.body3_list_item_title}>What are the benefits of using ID
                                    token?
                                </li>

                                <p className={classes.body3_list_item_content}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo adhuc, quantum
                                    equidem intellego, causa non videtur fuisse mutandi nominis.</p>


                            </div>


                        </Grid>
                    </Grid>
                </div>

                {/*footer*/}
                {/*-------------------------------------------------------*/}

                <div className={classes.footerContainer}>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={FooterLogo} alt="" width={150} className={classes.footerLogo}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <div style={{marginTop:20,fontFamily:'roboto'}}>
                                        <span style={{color:'#311b6e',fontWeight:'bold',fontSize:35}}>MyID</span>
                                        <span style={{color:'#ff0000',fontWeight:500,fontSize:35}}>Token</span>
                                    </div>
                                    <span style={{color:'#424242',fontWeight:400,fontSize:25}}>+365###</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{color:'#424242',fontWeight:400,fontSize:24,marginTop:20}}>Customer service:</div>
                                    <div style={{color:'#424242',fontWeight:400,fontSize:24}}>support@myidtoken.com</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
