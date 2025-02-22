import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Typography from "../text/Text";

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 100 }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const isTruncated: boolean = text.length > maxLength;

  const switchTruncate = () => setExpanded(!expanded);

  return (
    <View style={styles.root}>
      <Typography
        variant="small"
        style={[{ color: "#383838", textAlign: "justify" }]}
      >
        {expanded || !isTruncated ? text : `${text.slice(0, maxLength)}...`}
        {isTruncated && (
          <TouchableOpacity style={styles.readButton} onPress={switchTruncate}>
            <Text style={[styles.readMore, expanded ? {} : styles.expand]}>
              {expanded ? "Read Less" : "Read More"}
            </Text>
          </TouchableOpacity>
        )}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  readMore: {
    fontSize: 13,
    color: "#FF6667",
    position: "relative",
  },
  expand: {
    top: 5,
    left: -25,
  },
  readButton: {
    marginTop: 2,
  },
});

export default ReadMore;
