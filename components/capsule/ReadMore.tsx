import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
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
      </Typography>
      {isTruncated && (
        <TouchableOpacity style={styles.readButton} onPress={switchTruncate}>
          <Text style={styles.readMore}>
            {expanded ? "Read Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  readMore: {
    fontSize: 14,
    color: "#FF6667",
  },
  readButton: {
    marginTop: 2,
  },
});

export default ReadMore;
