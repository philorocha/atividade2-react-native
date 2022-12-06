import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
export default function Login() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <Avatar
                size={'xlarge'}
                containerStyle={styles.avatar}
                rounded
                title='FV'
                activeOpacity={0.7}
                onPress={() => alert('asdas')}
            />
            <Input
                label='Login'
            />
            <Input
                label='Senha'
            />
            <Button
                title={'Login'}
                buttonStyle={styles.button}
            />
            <Button
                title={'Cadastre-se'}
                buttonStyle={[styles.button, { backgroundColor: 'red' }]}
                style={styles.button}
            />
            <View style={{ flex: 1 }}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 4,
        marginRight: 4,
    },
    avatar: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#a7b0af',
    }

})
