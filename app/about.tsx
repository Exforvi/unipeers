import { View,Text,Image} from "react-native";
import { aboutStyles } from "@/styles/about.styles";


export default function About () {
  return (
    <View style={aboutStyles.wrapper}>
      {/* header content */}
      <View style={aboutStyles.header}>
        <Text style={aboutStyles.title}>unipeers</Text>
      </View>

      {/* middle content */}
      <View style={aboutStyles.body}>
        {/* first sub-group */}
        <View style={aboutStyles.aboutBlock}>
          <Text style={aboutStyles.aboutText}>Unipeers is a social media app made for tertiary institution
            students to connects with friends and classmate</Text>
          <Text style={aboutStyles.aboutText}>On unipeers you will find ton of events in your socials. 
            You can as well create your own events</Text>
          <Text style={aboutStyles.aboutText}>It goes further! You can find events in other schools right 
            from your campus. </Text>
        </View>

        {/* second sub-group */}
        <View style={aboutStyles.featuresBlock}>
          <View style={aboutStyles.featureBlock}>
            <Text style={aboutStyles.featureTitle}>Events</Text>
            <Text style={aboutStyles.featureText}>Create your own events</Text>
          </View>
          <View style={aboutStyles.featureBlock}>
            <Text style={aboutStyles.featureTitle}>Posts</Text>
            <Text style={aboutStyles.featureText}>Interract with posts</Text>
          </View>
        </View>

        {/* third sub-group */}
        <View>
          <View>
            <Text>1m+ Users</Text>
          </View>
          <View>
            <Text>10m+ events</Text>
          </View>
          <View>
            <Text>100m+ posts</Text>
          </View>
        </View>
     </View>

      {/* bottom content */}
      <View>
        <View>
          <Text>Privacy Policy</Text>
          <Text>Terms of Use</Text>
          <Text>Contact Us</Text>
        </View>
        <Text>{new Date().getFullYear()} All Right Reserved. Unipeers</Text>
      </View>   
    </View>
  )
}
