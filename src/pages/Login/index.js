import React from 'react';
import {

    View,
    Text,
} from 'react-native';
import { SocialIcon, Icon,Avatar } from 'react-native-elements';

export default class Login extends React.PureComponent {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar
                        rounded
                        size='xlarge'
                        source={{
                            uri:
                                'https://images.squarespace-cdn.com/content/v1/546bda42e4b02689ea84e659/1434908135361-GF5OZKCX107Q6XNSVZAS/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/vietnamwarfilm',
                        }}
                    />
                    <Text style={{fontSize:20}}>Lista de Filmes</Text>
                </View>
                <View style={{ flex: 0.6, borderWidth: 1, borderTopStartRadius: 30, borderTopEndRadius: 30, borderColor: 'gray' }}>
                    <SocialIcon
                        title='Entrar com Facebook'
                        button
                        type='facebook'
                    />
                    <SocialIcon
                        title='Entrar com Gmail       '
                        button
                        type='google'
                    />
                    <SocialIcon
                        title='Entrar com e-mail       '
                        button
                        type='envelope'
                    />

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>Não tem conta? Cadastre-se</Text>
                    </View>

                </View>

            </View>
        );
    }
}