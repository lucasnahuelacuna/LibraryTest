"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Card2 = ({ name, date, title, description, imageURL }) => {
    const getInitials = (name) => {
        if (name) {
            const initials = name?.match(/(\b\S)?/g)?.join("")?.match(/(^\S|\S$)?/g)?.join("");
            return initials?.toUpperCase();
        }
        else {
            return 'XX';
        }
    };
    return (<react_native_1.View style={styles.cardContainer}>
        <react_native_1.View style={styles.cardHeaderContaier}>
            <react_native_1.View style={styles.avatar}>
                <react_native_1.Text style={styles.textAvatar}>{getInitials(name)}</react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={styles.headerText}>
                <react_native_1.Text>{name}</react_native_1.Text>
                <react_native_1.Text>{date}</react_native_1.Text>
            </react_native_1.View>
        </react_native_1.View>
        <react_native_1.Image source={{ uri: imageURL }} style={{ width: '100%', height: 200 }}/>
        <react_native_1.Text style={styles.title}>{title}</react_native_1.Text>
        <react_native_1.Text>{description}</react_native_1.Text>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
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
    cardHeaderContaier: {
        flexDirection: 'row',
    },
    avatar: {
        backgroundColor: '#6002EE',
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
    },
    textAvatar: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    headerText: {
        marginLeft: 15
    },
    cardActionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    buttonText: {
        color: '#0000ff',
        fontWeight: '500'
    }
});
exports.default = Card2;
