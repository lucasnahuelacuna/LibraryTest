"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Card3 = ({ title, placeholder, confirmButtonText, cancelButtonText, handleConfirm, handleCancel, text, onChangeText }) => {
    return (<react_native_1.View style={styles.cardContainer}>
        <react_native_1.Text style={styles.title}>{title}</react_native_1.Text>
        <react_native_1.TextInput placeholder={placeholder} style={styles.input} onChangeText={onChangeText} value={text}/>
        <react_native_1.View style={styles.cardActionsContainer}>
            <react_native_1.Pressable style={{ marginRight: 15 }} onPress={handleCancel}>
                <react_native_1.Text style={styles.buttonText}>{cancelButtonText}</react_native_1.Text>
            </react_native_1.Pressable>
            <react_native_1.Pressable onPress={handleConfirm}>
                <react_native_1.Text style={styles.buttonText}>{confirmButtonText}</react_native_1.Text>
            </react_native_1.Pressable>
        </react_native_1.View>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 15
    },
    cardActionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10
    },
    buttonText: {
        color: '#6002EE',
        fontWeight: '500'
    },
    input: {
        borderColor: "#999",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10
    }
});
exports.default = Card3;
