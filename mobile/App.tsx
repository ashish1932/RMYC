import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Dynamic Data Bindings
const MEMBER_DATA = {
  name: 'Captain Ashish Kumar',
  id: 'RMYC-1911-0842',
  tier: 'Life Member',
  skipperRating: 'J80 Keelboat Master',
};

const WEATHER_DATA = {
  windSpeed: '14 Knots',
  windDir: 'Wind (ENE)',
  swell: '1.2 m',
  tideTime: '14:30 IST',
  seaTemp: '31°C',
};

const VESSEL_OPTIONS = [
  { id: '1', title: 'J80 Class Keelboat', sub: 'Racing Keelboat · Capacity 5 Crew', price: 'Included with Life Membership' },
  { id: '2', title: 'Seabird Class Dinghy', sub: 'Classic Vintage Sailboat · Capacity 3', price: 'Free Slot Reservation' },
  { id: '3', title: 'Enterprise Class', sub: 'Tactical Racing Dinghy · Capacity 2', price: 'Available Today' },
];

function App(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<'home' | 'pass' | 'sails' | 'weather'>('home');
  const [selectedVessel, setSelectedVessel] = useState(VESSEL_OPTIONS[0].title);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>ROYAL MADRAS YACHT CLUB</Text>
          <Text style={styles.headerSubtitle}>Est. 1911 · Chennai Harbour</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>MEMBER PASS</Text>
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Member Card Component */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>OFFICIAL DIGITAL PASS</Text>
          <Text style={styles.memberName}>{MEMBER_DATA.name}</Text>
          <Text style={styles.memberId}>ID: {MEMBER_DATA.id}</Text>

          <View style={styles.cardDivider} />

          <View style={styles.cardRow}>
            <View>
              <Text style={styles.metaLabel}>MEMBERSHIP TIER</Text>
              <Text style={styles.metaValue}>{MEMBER_DATA.tier}</Text>
            </View>
            <View>
              <Text style={styles.metaLabel}>FLEET RATING</Text>
              <Text style={styles.metaValue}>{MEMBER_DATA.skipperRating}</Text>
            </View>
          </View>
        </View>

        {/* Live Weather & Marine Conditions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Chennai Coast Marine Weather</Text>
        </View>

        <View style={styles.gridRow}>
          <View style={styles.gridCard}>
            <Text style={styles.gridIcon}>💨</Text>
            <Text style={styles.gridValue}>{WEATHER_DATA.windSpeed}</Text>
            <Text style={styles.gridLabel}>{WEATHER_DATA.windDir}</Text>
          </View>
          <View style={styles.gridCard}>
            <Text style={styles.gridIcon}>🌊</Text>
            <Text style={styles.gridValue}>{WEATHER_DATA.swell}</Text>
            <Text style={styles.gridLabel}>Swell Height</Text>
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={styles.gridCard}>
            <Text style={styles.gridIcon}>⚓</Text>
            <Text style={styles.gridValue}>{WEATHER_DATA.tideTime}</Text>
            <Text style={styles.gridLabel}>High Tide</Text>
          </View>
          <View style={styles.gridCard}>
            <Text style={styles.gridIcon}>☀️</Text>
            <Text style={styles.gridValue}>{WEATHER_DATA.seaTemp}</Text>
            <Text style={styles.gridLabel}>Sea Temp</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Club Quick Actions</Text>
        </View>

        {VESSEL_OPTIONS.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedVessel(item.title)}
            style={[
              styles.actionButton,
              selectedVessel === item.title && styles.actionButtonActive,
            ]}
          >
            <Text style={styles.actionIcon}>⛵</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.actionTitle}>{item.title}</Text>
              <Text style={styles.actionSub}>{item.sub}</Text>
            </View>
            <Text style={styles.actionArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        {[
          { id: 'home', label: 'Home', icon: '⚓' },
          { id: 'pass', label: 'Member ID', icon: '🪪' },
          { id: 'sails', label: 'Bookings', icon: '⛵' },
          { id: 'weather', label: 'Marine', icon: '🌊' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => setActiveTab(tab.id as any)}
            style={styles.navItem}
          >
            <Text style={[styles.navIcon, activeTab === tab.id && styles.navIconActive]}>
              {tab.icon}
            </Text>
            <Text style={[styles.navText, activeTab === tab.id && styles.navTextActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    color: '#0A192F',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  headerSubtitle: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#FEF3C7',
    borderColor: '#D4AF37',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#92400E',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 16,
  },
  card: {
    backgroundColor: '#0F2342',
    borderColor: '#1E3A8A',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#0A192F',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  cardLabel: {
    color: '#D4AF37',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  memberName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  memberId: {
    color: '#CBD5E1',
    fontSize: 12,
    marginTop: 2,
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#1E3A8A',
    marginVertical: 14,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaLabel: {
    color: '#94A3B8',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  metaValue: {
    color: '#F8FAFC',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
  },
  sectionHeader: {
    marginBottom: 12,
    marginTop: 4,
  },
  sectionTitle: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: 'bold',
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  gridCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  gridIcon: {
    fontSize: 22,
    marginBottom: 6,
  },
  gridValue: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: 'bold',
  },
  gridLabel: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 2,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  actionButtonActive: {
    borderColor: '#D4AF37',
    backgroundColor: '#FFFDF5',
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 14,
  },
  actionTitle: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  actionSub: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 2,
  },
  actionArrow: {
    color: '#D4AF37',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 18,
    opacity: 0.4,
  },
  navIconActive: {
    opacity: 1,
  },
  navText: {
    color: '#64748B',
    fontSize: 10,
    marginTop: 4,
    fontWeight: '600',
  },
  navTextActive: {
    color: '#0F2342',
    fontWeight: 'bold',
  },
});

export default App;
