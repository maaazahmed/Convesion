
    render() {



        return (
            <View style={styles.container}>
                <View style={styles.responsiveBox}>
          
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        flexWrap:"wrap",
    },
    responsiveBox: {
        width: wp('16%'),
        height: hp('10%'),
        borderWidth: 2,
        borderColor: 'orange',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin:5
    },
    text: {
        color: 'white'
    }
});