import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function MuralOptionC() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person" size={22} color="#2563EB" />
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingSmall}>Bem-vindo,</Text>
              <Text style={styles.greetingName}>Antônio Soares</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={22} color="#1A1A2E" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Card Aniversariantes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.sectionIcon}>
                <MaterialCommunityIcons name="cake-variant" size={18} color="#2563EB" />
              </View>
              <Text style={styles.sectionTitle}>Aniversariantes da Semana</Text>
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="filter" size={16} color="#64748B" />
            </TouchableOpacity>
          </View>

          <View style={styles.emptyState}>
            <View style={styles.emptyIconBg}>
              <MaterialCommunityIcons name="gift-outline" size={32} color="#2563EB" />
            </View>
            <Text style={styles.emptyTitle}>Sem aniversariantes</Text>
            <Text style={styles.emptySubtitle}>
              Preencha sua data de nascimento para aparecer aqui
            </Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Card Família da Semana */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <View style={[styles.sectionIcon, { backgroundColor: '#F0F9FF' }]}>
                <Ionicons name="people" size={18} color="#2563EB" />
              </View>
              <Text style={styles.sectionTitle}>Família da Semana</Text>
            </View>
          </View>

          <View style={styles.familyContainer}>
            <View style={styles.familyHeader}>
              <Text style={styles.familyName}>Croft</Text>
              <View style={styles.familyBadge}>
                <Ionicons name="star" size={12} color="#2563EB" />
                <Text style={styles.familyBadgeText}>Destaque</Text>
              </View>
            </View>

            <View style={styles.membersContainer}>
              <View style={styles.memberChip}>
                <View style={styles.memberAvatar}>
                  <Text style={styles.memberInitial}>S</Text>
                </View>
                <Text style={styles.memberName}>Store</Text>
                <Ionicons name="checkmark-circle" size={14} color="#2563EB" />
              </View>

              <View style={styles.memberChip}>
                <View style={[styles.memberAvatar, { backgroundColor: '#DBEAFE' }]}>
                  <Text style={[styles.memberInitial, { color: '#2563EB' }]}>L</Text>
                </View>
                <Text style={styles.memberName}>Lara Croft</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.prayButton} activeOpacity={0.7}>
              <MaterialCommunityIcons name="hands-pray" size={18} color="#2563EB" />
              <Text style={styles.prayText}>Orar por esta família</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <MaterialCommunityIcons name="gift-outline" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid" size={24} color="#2563EB" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Mural</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="edit-3" size={22} color="#94A3B8" />
          <Text style={styles.navLabel}>Publicações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={22} color="#94A3B8" />
          <Text style={styles.navLabel}>Calendário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="menu" size={24} color="#94A3B8" />
          <Text style={styles.navLabel}>Geral</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingContainer: {
    marginLeft: 12,
  },
  greetingSmall: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '400',
  },
  greetingName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  notificationBtn: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 12,
    right: 14,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#fff',
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sectionIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.2,
  },
  filterBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
  },
  emptyIconBg: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
  },
  divider: {
    height: 8,
    backgroundColor: '#F8FAFC',
    marginVertical: 20,
  },
  familyContainer: {
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 16,
  },
  familyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  familyName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.5,
  },
  familyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
  },
  familyBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563EB',
  },
  membersContainer: {
    gap: 8,
    marginBottom: 16,
  },
  memberChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    gap: 10,
  },
  memberAvatar: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberInitial: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  memberName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0F172A',
    flex: 1,
  },
  prayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    gap: 8,
  },
  prayText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  navLabel: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 4,
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#2563EB',
    fontWeight: '700',
  },
});
